import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInjectionIcon],svg[hugeicons-injection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2c0 .51 0 .765.068 1.002q.056.196.155.375c.12.216.3.396.66.757l1.983 1.982c.36.36.54.54.757.661q.178.1.375.155C21.235 7 21.49 7 22 7M11.693 7l-4.928 4.928c-1.065 1.065-1.597 1.597-1.724 2.235c-.055.276-.055.56 0 .837c.127.638.66 1.17 1.724 2.235S8.362 18.832 9 18.959c.277.055.56.055.837 0c.638-.127 1.17-.66 2.235-1.724L17 12.307M11 6l7 7M8 18.637l-1.17.835c-.47.337-.705.505-.964.525q-.15.012-.298-.025c-.251-.062-.455-.267-.864-.675c-.41-.41-.614-.614-.676-.865a1 1 0 0 1-.025-.298c.02-.259.188-.494.524-.965L5.363 16M13.5 8l5-4M16 10.5l4-5m-15.5 14L2 22" color="currentColor"></svg:path>`,
})
export class HugeiconsInjectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
