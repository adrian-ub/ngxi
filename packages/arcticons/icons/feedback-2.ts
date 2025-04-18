import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeedback2Icon],svg[arcticons-feedback-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.597 17.362l.851 2.619h2.753l-2.227 1.618l.851 2.619l-2.228-1.618l-2.228 1.618l.851-2.619l-2.228-1.618h2.754zm9.403 0l.851 2.619h2.754l-2.228 1.618l.851 2.619L24 22.6l-2.228 1.618l.851-2.619l-2.228-1.618h2.754zm9.403 0l.851 2.619h2.754l-2.228 1.618l.851 2.619l-2.228-1.618l-2.228 1.618l.851-2.619l-2.227-1.618h2.753z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.284 8.669H8.716A4.216 4.216 0 0 0 4.5 12.885v15.81a4.216 4.216 0 0 0 4.216 4.217h10.905l3.37 5.837a1.164 1.164 0 0 0 2.017 0l3.37-5.837h10.906a4.216 4.216 0 0 0 4.216-4.217v-15.81a4.216 4.216 0 0 0-4.216-4.217"></svg:path>`,
})
export class ArcticonsFeedback2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
