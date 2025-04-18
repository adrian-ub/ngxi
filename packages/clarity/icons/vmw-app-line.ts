import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityVmwAppLineIcon],svg[clarity-vmw-app-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h2v8h-8v-2h-2v4h12V20h-4z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M14 30H6v-8h2v-2H4v12h12v-4h-2z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M8 14H6V6h8v2h2V4H4v12h4z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M20 4v4h2V6h8v8h-2v2h4V4z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M11 11h6v6h-6z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M19 11h6v6h-6z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M11 19h6v6h-6z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M19 19h6v6h-6z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmwAppLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
