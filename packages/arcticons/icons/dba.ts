import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbaIcon],svg[arcticons-dba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.4 25.18c0-1.94-1.553-3.527-3.45-3.527S10.5 23.24 10.5 25.18v2.293c0 1.94 1.552 3.528 3.45 3.528s3.45-1.588 3.45-3.528m0 3.529V16.891m3.318 8.335c0-1.94 1.553-3.528 3.45-3.528s3.45 1.588 3.45 3.528v2.293c0 1.94-1.552 3.528-3.45 3.528s-3.45-1.587-3.45-3.528m0 3.528V16.936M37.5 27.58c0 1.941-1.552 3.529-3.45 3.529S30.6 29.52 30.6 27.58v-2.293c0-1.94 1.553-3.528 3.45-3.528s3.45 1.588 3.45 3.528m0 5.821v-9.349"></svg:path>`,
})
export class ArcticonsDbaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
