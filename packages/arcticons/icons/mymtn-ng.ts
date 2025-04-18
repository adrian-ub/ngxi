import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMymtnNgIcon],svg[arcticons-mymtn-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M29.958 14.388v2.23c0 .911-.74 1.65-1.651 1.65h0c-.456 0-.87-.184-1.168-.483"></svg:path><svg:path d="M29.958 11.664v2.724c0 .912-.74 1.652-1.651 1.652h0c-.912 0-1.652-.74-1.652-1.652v-2.724"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.042 13.315c0-.912.74-1.651 1.651-1.651h0c.912 0 1.652.74 1.652 1.651v2.724m-3.303-4.375v4.376"></svg:path><svg:path d="M21.345 13.315a1.65 1.65 0 0 1 1.65-1.651h0c.913 0 1.652.74 1.652 1.651v2.724"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.073 31.311v-6.747l3.377 6.754l3.377-6.743v6.743m8.338 0v-6.754l4.474 6.754v-6.754m-10.82 0h4.474m-2.237 6.754v-6.754"></svg:path><svg:ellipse cx="24" cy="27.941" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="15" ry="7.395"></svg:ellipse>`,
})
export class ArcticonsMymtnNgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
