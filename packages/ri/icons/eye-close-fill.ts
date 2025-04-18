import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEyeCloseFillIcon],svg[ri-eye-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.13 15.842l-.787 2.94l-1.932-.517l.787-2.94a11 11 0 0 1-3.237-1.871l-2.153 2.153l-1.414-1.414l2.153-2.154a10.96 10.96 0 0 1-2.371-5.07l.9-.164A16.92 16.92 0 0 0 12 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.96 10.96 0 0 1-2.37 5.071l2.153 2.154l-1.414 1.414l-2.154-2.153a11 11 0 0 1-3.237 1.872l.788 2.939l-1.932.517l-.788-2.94a11.1 11.1 0 0 1-3.74 0"></svg:path>`,
})
export class RiEyeCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
