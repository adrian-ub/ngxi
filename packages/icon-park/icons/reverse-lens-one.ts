import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseLensOneIcon],svg[icon-park-reverse-lens-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M15 12L18 6H30L33 12H15Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 19V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 27V35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 27C16 31.4183 19.5817 35 24 35C25.0609 35 26.0736 34.7935 27 34.4185"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 27C32 22.5817 28.4183 19 24 19C22.9391 19 21.9264 19.2065 21 19.5815"></svg:path></svg:g>`,
})
export class IconParkReverseLensOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
