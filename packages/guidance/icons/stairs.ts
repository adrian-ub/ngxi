import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceStairsIcon],svg[guidance-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 24v-.149a7.5 7.5 0 0 0-1.894-4.982l-.106-.12v-.25h7v-.648a7.5 7.5 0 0 0-1.894-4.982l-.106-.12v-.25h7v-.648a7.5 7.5 0 0 0-1.894-4.982l-.106-.12V6.5h7v-.648A7.5 7.5 0 0 0 16.606.87L16.5.749V.5H24"></svg:path>`,
})
export class GuidanceStairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
