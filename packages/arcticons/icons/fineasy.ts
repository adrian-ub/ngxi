import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFineasyIcon],svg[arcticons-fineasy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.006 39.635v-13.44c0-12.193 10.738-17.914 19.123-17.829c8.384.086 13.37 7.885 13.37 7.885"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 26.495l33.942-.027c-.22-5.284-3.922-11.363-11.442-11.31c-7.519.054-10.36 7.011-10.376 6.885"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.805 26.486c-.043 5.888 4.146 10.974 11.387 10.963c7.24-.01 9.966-6.802 9.966-6.802"></svg:path>`,
})
export class ArcticonsFineasyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
