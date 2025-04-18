import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsShadowOuterIcon],svg[radix-icons-shadow-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.14 3.886a6 6 0 1 1-8.244 8.269l.425-.263a5.5 5.5 0 1 0 7.557-7.58z" opacity=".05"></svg:path><svg:path d="M12.851 5.073a5.5 5.5 0 1 1-7.778 7.778l.357-.35a5 5 0 1 0 7.07-7.07z" opacity=".2"></svg:path><svg:path d="M13.302 6.45a5 5 0 0 1-6.901 6.822l.26-.427a4.5 4.5 0 0 0 6.21-6.14z" opacity=".35"></svg:path><svg:path d="M13.375 7.94q.124.511.125 1.06a4.5 4.5 0 0 1-5.627 4.358l.125-.485Q8.479 13 9 13a4 4 0 0 0 3.888-4.942z" opacity=".5"></svg:path><svg:path d="M12.916 9.821a4 4 0 0 1-3.124 3.1l-.098-.49a3.5 3.5 0 0 0 2.732-2.712z" opacity=".65"></svg:path><svg:path d="M1.277 7.503a6.225 6.225 0 1 1 12.45 0a6.225 6.225 0 0 1-12.45 0m6.225-5.275a5.275 5.275 0 1 0 0 10.55a5.275 5.275 0 0 0 0-10.55"></svg:path></svg:g>`,
})
export class RadixIconsShadowOuterIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
