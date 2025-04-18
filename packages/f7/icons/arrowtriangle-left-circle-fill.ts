import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowtriangleLeftCircleFillIcon],svg[f7-arrowtriangle-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m3.515-14.86l-13.148-7.78a1.422 1.422 0 0 1 0-2.485l13.148-7.804c1.032-.586 2.32-.118 2.32.96v16.125c0 1.126-1.218 1.641-2.32.985"></svg:path>`,
})
export class F7ArrowtriangleLeftCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
