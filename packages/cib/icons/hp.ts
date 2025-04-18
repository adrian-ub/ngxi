import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHpIcon],svg[cib-hp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32h-.531l3.333-8.932h4.531c.802 0 1.599-.667 1.865-1.333l3.604-9.734c.531-1.599-.401-2.932-2-2.932h-6.271L12.401 31.6C5.198 29.866 0 23.6 0 16.001C0 8.668 4.932 2.532 11.734.532L8.666 9.068l-5.198 14h3.333l4.266-11.87h2.531l-4.266 11.87h3.333l4-11.068c.531-1.599-.266-2.932-2-2.932h-2.667L15.331 0h.667c8.802 0 16 7.198 16 16s-7.198 16-16 16zm9.734-20.932h-2.536l-3.599 9.734h2.536z"></svg:path>`,
})
export class CibHpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
