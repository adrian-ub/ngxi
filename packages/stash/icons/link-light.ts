import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashLinkLightIcon],svg[stash-link-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.762 5.2a4.275 4.275 0 0 1 6.045 6.045l-.006.006l-2.265 2.265a4.277 4.277 0 0 1-6.446-.461a.5.5 0 1 1 .8-.6a3.275 3.275 0 0 0 4.939.354l2.262-2.262a3.275 3.275 0 0 0-4.631-4.63l-1.296 1.288a.5.5 0 1 1-.705-.709zm-3.77 4.3a4.275 4.275 0 0 1 4.918 1.445a.5.5 0 1 1-.8.6a3.277 3.277 0 0 0-4.94-.354l-2.26 2.262a3.275 3.275 0 0 0 4.63 4.63l1.289-1.287a.5.5 0 0 1 .707.707L11.238 18.8a4.275 4.275 0 0 1-6.045-6.045l.006-.006l2.265-2.265A4.3 4.3 0 0 1 8.993 9.5" clip-rule="evenodd"></svg:path>`,
})
export class StashLinkLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
