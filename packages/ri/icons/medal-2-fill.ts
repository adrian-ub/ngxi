import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMedal2FillIcon],svg[ri-medal-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.5l2.116 5.088l5.493.44l-4.185 3.585l1.278 5.36L12 20.1l-4.702 2.872l1.278-5.36l-4.184-3.584l5.492-.44zM8 2v9H6V2zm10 0v9h-2V2zm-5 0v5h-2V2z"></svg:path>`,
})
export class RiMedal2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
