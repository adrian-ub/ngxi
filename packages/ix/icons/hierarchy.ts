import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHierarchyIcon],svg[ix-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64h170.667v106.667H170.667zm-128 277.333h128v85.334h-128zm298.667 0h128v85.334h-128zm-149.334 0h128v85.334H192zM277.334 192l-.001 42.666h149.334V320H384v-42.688H277.333V320h-42.666v-42.688H128V320H85.334v-85.333l149.333-.001V192z"></svg:path>`,
})
export class IxHierarchyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
