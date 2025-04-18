import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTunnelbearIcon],svg[arcticons-tunnelbear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="24" cy="10.934" rx="13.143" ry="3.772"></svg:ellipse><svg:path d="M40.706 10.894c0 3.531-7.48 6.394-16.706 6.394S7.294 14.425 7.294 10.894m0 0C7.294 7.363 14.774 4.5 24 4.5s16.706 2.863 16.706 6.394v6.351c0 3.532-7.48 6.394-16.706 6.394S7.294 20.777 7.294 17.246z"></svg:path><svg:path d="M39.196 20.157v17.487c0 3.234-6.803 5.856-15.196 5.856S8.804 40.878 8.804 37.644V20.157"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.665 39.329c1.231-1.362 4.722-.27 6.97-.27c1.014 0 2.128-.317 2.805-2.226c1.034-2.914 2.598-7.446 3.276-9.68"></svg:path><svg:path d="M33.813 27.154H20.97c-6.638 0-7.677 4.3-6.038 6.311c2.99 3.668 8.105.777 6.782-2.184c-.744-1.665-2.892-1.922-3.863-.751"></svg:path></svg:g>`,
})
export class ArcticonsTunnelbearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
