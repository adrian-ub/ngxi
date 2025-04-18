import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidVrCardboardIcon],svg[fa6-solid-vr-cardboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h120.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M96 240a64 64 0 1 1 128 0a64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128a64 64 0 1 1 0-128"></svg:path>`,
})
export class Fa6SolidVrCardboardIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
