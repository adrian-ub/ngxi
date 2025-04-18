import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGearIcon],svg[ls-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m649 143l-68 69c18 28 31 60 37 94h99v106h-99c-6 34-19 65-37 93l68 70l-75 75l-69-69c-28 18-59 32-93 38v98H305v-98c-34-6-65-20-93-38l-70 69l-74-75l68-70c-18-28-32-59-38-93H0V306h98c6-34 20-66 38-94l-68-69l74-75l70 69c28-18 59-32 93-38V0h107v99c34 6 65 20 93 38l69-69zM358 507c82 0 149-66 149-148s-67-149-149-149s-147 67-147 149s65 148 147 148"></svg:path>`,
})
export class LsGearIcon {
  readonly viewBox = input("0 0 717 717")
  readonly width = input("1em")
  readonly height = input("1em")
}
