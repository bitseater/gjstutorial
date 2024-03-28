#!/usr/bin/gjs

imports.gi.versions.Gtk = "3.0";
const { Gtk } = imports.gi;

Gtk.init(null);

const button = new Gtk.LinkButton({
    label: 'Open Me!',
    uri: 'https://gnome.org'
});
button.connect('clicked', () => {
    log('Visit me!');
});

const win = new Gtk.Window({ defaultHeight: 600, defaultWidth: 800 });
win.connect('destroy', () => { Gtk.main_quit(); });
win.add(button);
win.show_all();

Gtk.main();
