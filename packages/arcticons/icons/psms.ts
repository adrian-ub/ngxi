import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPsmsIcon],svg[arcticons-psms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.967 35.808A21.5 21.5 0 0 0 45.5 24h0c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24S12.126 45.5 24 45.5a21.5 21.5 0 0 0 11.54-3.36c2.244-1.155 5.735.004 8.366 1.912c-2.03-2.815-3.26-5.842-1.939-8.244"></svg:path>`,
})
export class ArcticonsPsmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
