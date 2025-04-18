import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabJarIcon],svg[lucide-lab-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 3h16M5 3v1.6c0 .8-.2 1.6-.7 2.2l-.7 1C3.2 8.4 3 9.2 3 10v8c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-8c0-.8-.2-1.6-.7-2.2l-.7-1c-.4-.7-.6-1.4-.6-2.2V3M3 13h4"></svg:path><svg:rect width="10" height="7" x="7" y="10" rx="1"></svg:rect><svg:path d="M17 13h4"></svg:path></svg:g>`,
})
export class LucideLabJarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
