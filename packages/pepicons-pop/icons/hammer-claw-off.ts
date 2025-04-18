import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopHammerClawOffIcon],svg[pepicons-pop-hammer-claw-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.632 1.703a2 2 0 0 1 1.088.179l3.808 1.802a2 2 0 0 1 .952 2.664l-1.07 2.26a2 2 0 0 1-2.663.952L7.405 7.978a2 2 0 0 1-.859-.778l-.35-.583l-.95.339c-1.677.6-3.243-1.128-2.48-2.739l.44-.932a2 2 0 0 1 1.576-1.131zm4.04 3.79L8.864 3.69l-3.85.45l-.44.933l.949-.34a2 2 0 0 1 2.388.854l.35.583l3.342 1.582z"></svg:path><svg:path d="M13.79 5.468a2 2 0 0 1 2.663-.952l.904.428a2 2 0 0 1 .952 2.663l-1.71 3.616a2 2 0 0 1-2.664.952l-.904-.428a2 2 0 0 1-.952-2.663zm2.712 1.284l-.904-.428l-1.712 3.615l.904.428zm-7.349 1.5l-3.85 8.135l.904.428l3.85-8.135l1.808.856l-3.85 8.134a2 2 0 0 1-2.664.952l-.904-.427a2 2 0 0 1-.952-2.664l3.85-8.135z"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopHammerClawOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
