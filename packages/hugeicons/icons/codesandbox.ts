import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCodesandboxIcon],svg[hugeicons-codesandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.845 2.478C11.41 2.159 11.691 2 12 2s.591.16 1.155.478l6.69 3.782c.564.318.846.478 1 .74S21 7.58 21 8.218v7.564c0 .637 0 .956-.155 1.218c-.154.262-.436.422-1 .74l-6.69 3.782c-.564.319-.846.478-1.155.478s-.591-.16-1.155-.478l-6.69-3.782c-.564-.318-.846-.478-1-.74S3 16.42 3 15.782V8.218c0-.637 0-.956.155-1.218c.154-.262.436-.422 1-.74z"></svg:path><svg:path d="m15.5 4.27l-2.366 1.28c-.554.3-.83.45-1.134.45s-.58-.15-1.134-.45L8.5 4.27m3.5 7.345V22m0-10.385L20.5 7M12 11.615L3.5 7M3 12l2.894 1.559c.538.29.807.434.957.694S7 14.837 7 15.485V19m14-7l-2.894 1.559c-.538.29-.807.434-.957.694S17 14.837 17 15.485V19"></svg:path></svg:g>`,
})
export class HugeiconsCodesandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
