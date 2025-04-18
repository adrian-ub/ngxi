import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BurnIcon],svg[f7-burn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906M27.953 28l-9.96 17.273C12.062 41.828 8.1 35.406 8.1 28zl-9.96-17.273c2.929-1.688 6.327-2.649 9.984-2.649c3.632 0 7.03.961 9.96 2.649zh19.969c0 7.43-3.985 13.875-9.961 17.297Z"></svg:path>`,
})
export class F7BurnIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
