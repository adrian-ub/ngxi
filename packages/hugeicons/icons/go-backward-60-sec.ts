import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoBackward60SecIcon],svg[hugeicons-go-backward-60-sec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 5l-1.104-1.545c-.41-.576-.617-.864-.487-1.13c.13-.268.46-.283 1.12-.314Q11.763 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"></svg:path><svg:path d="M16.505 12.594c-.005-1.374.063-1.749-.19-2.192c-.251-.443-.882-.405-1.512-.405s-1.063 0-1.357.309c-.332.393-.246.794-.26 2.276c.014 2.058-.106 2.778.254 3.078c.36.42.823.324 1.477.336c.65-.008 1.043.024 1.364-.36c.356-.335.184-1.665.224-3.042m-5.741-1.602c-.024-.732-.416-.996-1.57-.996c-1.247-.015-1.682.024-1.694 1.404v3.36c0 1.5 1.14 1.206 1.74 1.242c.48-.036 1.508.236 1.578-1.302c-.078-1.44-.618-1.44-1.578-1.44c-1.32 0-1.38 0-1.74.81"></svg:path></svg:g>`,
})
export class HugeiconsGoBackward60SecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
