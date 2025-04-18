import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLampFillIcon],svg[lets-icons-lamp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.856 15.686l-.1.25a8.7 8.7 0 0 1-5.512 0l-.1-.25c-.095-.23-.143-.346-.226-.452c-.082-.107-.226-.215-.514-.43a6 6 0 1 1 7.192 0c-.288.215-.432.323-.514.43s-.13.221-.226.452m-5.006 2.48q.13.792.148 1.598a.39.39 0 0 0 .213.342a4 4 0 0 0 3.578 0a.39.39 0 0 0 .213-.342q.018-.806.148-1.598a10.7 10.7 0 0 1-4.3 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsLampFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
