import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsOpelIcon],svg[simple-icons-opel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.291 4.57a7.46 7.46 0 0 0-7.338 5.006h.568a6.93 6.93 0 0 1 6.483-4.494a6.92 6.92 0 0 1 6.922 6.924c0 .116 0 .234-.01.351l.533.059c0-.134.01-.273.01-.4a7.46 7.46 0 0 0-7.168-7.446M.869 10.113L0 10.566l13.25 1.44l3.63-1.893H.87zm3.682 1.483v.41a7.46 7.46 0 0 0 14.498 2.441h-.57a6.92 6.92 0 0 1-6.475 4.487a6.93 6.93 0 0 1-6.92-6.928v-.352zm6.193.414l-3.63 1.898h16.011l.873-.453v-.006zm13.254 1.44H24l-.002-.007z"></svg:path>`
})
export class SimpleIconsOpelIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
