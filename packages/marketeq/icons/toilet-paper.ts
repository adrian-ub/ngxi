import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqToiletPaperIcon],svg[marketeq-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M14.583 18.854v-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M14.583 29.167h8.334zm0-20.834C9.98 8.333 6.25 13 6.25 18.75s3.73 10.417 8.333 10.417c4.605 0 8.334-4.667 8.334-10.417s-3.73-10.417-8.334-10.417"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M22.917 18.75v22.917H43.75V18.75c0-5.75-3.73-10.417-8.333-10.417H14.583"></svg:path></svg:g>`,
})
export class MarketeqToiletPaperIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
