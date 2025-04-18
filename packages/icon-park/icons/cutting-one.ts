import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCuttingOneIcon],svg[icon-park-cutting-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M11 42C13.7614 42 16 39.7614 16 37C16 34.2386 13.7614 32 11 32C8.23858 32 6 34.2386 6 37C6 39.7614 8.23858 42 11 42Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M37 42C39.7614 42 42 39.7614 42 37C42 34.2386 39.7614 32 37 32C34.2386 32 32 34.2386 32 37C32 39.7614 34.2386 42 37 42Z"></svg:path><svg:path stroke-linecap="round" d="M15.3774 39.4131L17.5 35.8162L34.5 6.37138"></svg:path><svg:path stroke-linecap="round" d="M13.4957 6.17518L30.4957 35.62L32.6265 39.4131"></svg:path></svg:g>`,
})
export class IconParkCuttingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
