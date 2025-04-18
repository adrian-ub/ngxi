import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTabsIcon],svg[ph-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.66 165.7a.2.2 0 0 0 0-.08L233.37 91.4A15.89 15.89 0 0 0 218.05 80H208a8 8 0 0 0 0 16h10.05l19.2 64H206l-20.63-68.6A15.89 15.89 0 0 0 170.05 80H160a8 8 0 0 0 0 16h10.05l19.2 64H158l-20.63-68.6A15.89 15.89 0 0 0 122.05 80H38a15.89 15.89 0 0 0-15.37 11.4L.37 165.6v.13A8.1 8.1 0 0 0 0 168a8 8 0 0 0 8 8h240a8 8 0 0 0 7.66-10.3M38 96h84.1l19.2 64H18.75Z"></svg:path>`,
})
export class PhTabsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
