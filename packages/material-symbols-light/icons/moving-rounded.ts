import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMovingRoundedIcon],svg[material-symbols-light-moving-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.404 8.214l-5.321 5.296q-.74.72-1.78.73q-1.038.01-1.759-.711l-1.175-1.175q-.448-.448-1.056-.438q-.607.009-1.055.438l-4.6 4.6q-.14.14-.345.15t-.363-.15t-.16-.354t.16-.354l4.6-4.6q.74-.721 1.77-.73q1.028-.01 1.768.73l1.15 1.15q.454.454 1.069.444q.614-.01 1.068-.444L19.691 7.5h-2.787q-.214 0-.357-.143q-.143-.144-.143-.357t.143-.357q.143-.143.357-.143h3.692q.348 0 .578.23t.23.578V11q0 .214-.143.357t-.357.143t-.357-.143t-.143-.357z"></svg:path>`,
})
export class MaterialSymbolsLightMovingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
