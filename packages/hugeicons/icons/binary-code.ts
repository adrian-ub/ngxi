import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBinaryCodeIcon],svg[hugeicons-binary-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6c0-.943 0-1.414.293-1.707S3.057 4 4 4s1.414 0 1.707.293S6 5.057 6 6v2c0 .943 0 1.414-.293 1.707S4.943 10 4 10s-1.414 0-1.707-.293S2 8.943 2 8zm4.5 10c0-.943 0-1.414.293-1.707S7.557 14 8.5 14s1.414 0 1.707.293s.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707S9.443 20 8.5 20s-1.414 0-1.707-.293S6.5 18.943 6.5 18zm7-10c0-.943 0-1.414.293-1.707S14.557 4 15.5 4s1.414 0 1.707.293s.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707S16.443 10 15.5 10s-1.414 0-1.707-.293S13.5 8.943 13.5 8zm0 10c0-.943 0-1.414.293-1.707S14.557 14 15.5 14s1.414 0 1.707.293s.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707S16.443 20 15.5 20s-1.414 0-1.707-.293S13.5 18.943 13.5 18zM9 5l1.5-1v6M2 15l1.5-1v6m17-15L22 4v6m-1.5 5l1.5-1v6" color="currentColor"></svg:path>`,
})
export class HugeiconsBinaryCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
