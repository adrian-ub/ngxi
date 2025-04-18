import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashBoldIcon],svg[ph-bell-simple-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14l14.8 16.29A83.6 83.6 0 0 0 44 104c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.05 20.07A19.75 19.75 0 0 0 48 196h125.6l25.52 28.07a12 12 0 0 0 17.76-16.14M54.68 172C63.52 154 68 131.14 68 104a59.8 59.8 0 0 1 3.52-20.29L151.78 172ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12M88.89 42.35a12 12 0 0 1 6.37-15.73A84 84 0 0 1 212 104c0 18.68 2.38 34.93 7.07 48.28a12 12 0 1 1-22.64 8C190.83 144.32 188 125.4 188 104a60 60 0 0 0-83.38-55.28a12 12 0 0 1-15.73-6.37"></svg:path>`,
})
export class PhBellSimpleSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
