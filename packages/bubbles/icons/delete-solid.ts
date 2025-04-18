import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDeleteSolidIcon],svg[bubbles-delete-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.659 2.343a7.996 7.996 0 1 0 0 11.314a8.01 8.01 0 0 0 0-11.314m-2.52 7.843a.667.667 0 0 1-.94.943L8.128 9.056a.17.17 0 0 0-.236 0l-2.073 2.073a.68.68 0 0 1-.943 0a.667.667 0 0 1 0-.943l2.073-2.073a.166.166 0 0 0 0-.235L4.875 5.805a.667.667 0 0 1 .94-.944l2.072 2.074a.167.167 0 0 0 .236 0l2.074-2.074a.667.667 0 0 1 .942.944L9.066 7.878a.167.167 0 0 0 0 .235z"></svg:path>`,
})
export class BubblesDeleteSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
