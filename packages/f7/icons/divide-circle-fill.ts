import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DivideCircleFillIcon],svg[f7-divide-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-.07-30.023c-1.641 0-2.93-1.172-2.93-2.719c0-1.71 1.289-2.953 2.93-2.953c1.78 0 3.023 1.219 3.023 2.953c0 1.523-1.266 2.719-3.023 2.719m-9.516 8.203c-1.406 0-2.344-.703-2.344-2.04c0-1.335.89-2.085 2.344-2.085h19.172c1.406 0 2.297.75 2.297 2.086s-.938 2.039-2.297 2.039Zm9.516 9.75c-1.641 0-2.93-1.195-2.93-2.719c0-1.758 1.289-2.953 2.93-2.953c1.78 0 3.023 1.195 3.023 2.953c0 1.524-1.266 2.719-3.023 2.719"></svg:path>`,
})
export class F7DivideCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
