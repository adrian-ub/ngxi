import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHorseshoeIcon],svg[mdi-horseshoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h1V1h-4v3s2 4 2 8s-2 7-6 7s-6-3-6-7s2-8 2-8V1H4v3h1S2 8 2 14c0 5 5 9 10 9s10-4 10-9c0-6-3-10-3-10M4 13c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2 6c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m6 3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m6-3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2-6c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class MdiHorseshoeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
