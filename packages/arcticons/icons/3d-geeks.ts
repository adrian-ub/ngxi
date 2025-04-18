import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3dGeeksIcon],svg[arcticons-3d-geeks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.068 30.737h-5.15a4.736 4.736 0 0 1-4.715-4.291l-.695-7.364a1.663 1.663 0 0 1 1.655-1.819h13.345a1.89 1.89 0 0 1 1.83 2.359l-2.004 7.805a4.404 4.404 0 0 1-4.265 3.31m17.863 0h5.15a4.736 4.736 0 0 0 4.715-4.291l.695-7.364a1.663 1.663 0 0 0-1.655-1.819H28.492a1.89 1.89 0 0 0-1.83 2.359l2.004 7.805a4.404 4.404 0 0 0 4.266 3.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.627 19.426A5.8 5.8 0 0 0 24 18.797c-.945 0-1.838.227-2.627.629"></svg:path>`,
})
export class Arcticons3dGeeksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
