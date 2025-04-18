import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconMaterialuiIcon],svg[devicon-materialui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8z"></svg:path><svg:path fill="#1C7FB6" d="m48 41l47.9-27.6v55.3L64 87l-16-9.2l32-18.4V41L48 59.4z"></svg:path><svg:path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2z"></svg:path><svg:path fill="#1C7FB6" d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2zM111.9 41V22.6l16-9.2v18.4z"></svg:path>`,
})
export class DeviconMaterialuiIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
