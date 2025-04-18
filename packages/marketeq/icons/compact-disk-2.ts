import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCompactDisk2Icon],svg[marketeq-compact-disk-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38.25 11.75a18.2 18.2 0 0 0-7.312-4.52l-5.73 13.603a4.167 4.167 0 0 1 3.959 3.938l13.625-5.73a18.2 18.2 0 0 0-4.542-7.29"></svg:path><svg:path stroke="#344054" d="M25 29.167a4.167 4.167 0 1 0 0-8.334a4.167 4.167 0 0 0 0 8.334"></svg:path><svg:path stroke="#344054" d="m19.063 42.77l5.729-13.603a4.166 4.166 0 0 1-3.959-3.938L7.23 30.938A18.75 18.75 0 0 0 19.063 42.77"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqCompactDisk2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
