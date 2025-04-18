import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle016FilledIcon],svg[fluent-number-circle-0-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m5.5 0c0-.793.122-1.44.37-1.872c.227-.393.565-.628 1.13-.628s.903.235 1.13.628c.248.432.37 1.079.37 1.872s-.122 1.44-.37 1.872c-.227.393-.565.628-1.13.628s-.903-.235-1.13-.628C6.623 9.44 6.5 8.793 6.5 8M8 4.5c-.935 0-1.597.437-1.996 1.13C5.628 6.282 5.5 7.136 5.5 8s.128 1.717.504 2.37c.399.693 1.061 1.13 1.996 1.13s1.597-.437 1.996-1.13c.376-.653.504-1.507.504-2.37s-.128-1.717-.504-2.37C9.597 4.936 8.935 4.5 8 4.5"></svg:path>`,
})
export class FluentNumberCircle016FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
