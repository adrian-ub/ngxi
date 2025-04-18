import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFoldersLightIcon],svg[lets-icons-folders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M14.5 5.5c0-.943 0-1.414.293-1.707S15.557 3.5 16.5 3.5h3c.943 0 1.414 0 1.707.293s.293.764.293 1.707v13c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-3c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707z"></svg:path><svg:path stroke="currentColor" d="M16.5 17c0-.236 0-.354.073-.427s.191-.073.427-.073h2c.236 0 .354 0 .427.073s.073.191.073.427v1c0 .236 0 .354-.073.427s-.191.073-.427.073h-2c-.236 0-.354 0-.427-.073S16.5 18.236 16.5 18z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M16.5 6.5h3m-3 3h3m-5 5h7m-3-11h-8c-.943 0-1.414 0-1.707.293S8.5 4.557 8.5 5.5v13c0 .943 0 1.414.293 1.707s.764.293 1.707.293h8"></svg:path><svg:path stroke="currentColor" d="M13 16.5h-2c-.236 0-.354 0-.427.073s-.073.191-.073.427v1c0 .236 0 .354.073.427s.191.073.427.073h2"></svg:path><svg:path fill="currentColor" d="M10.5 6a.5.5 0 0 0 0 1zm0 1H13V6h-2.5zm0 2a.5.5 0 0 0 0 1zm0 1H13V9h-2.5z"></svg:path><svg:path stroke="currentColor" d="M8.5 14.5H13"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12.5 3.5h-8c-.943 0-1.414 0-1.707.293S2.5 4.557 2.5 5.5v13c0 .943 0 1.414.293 1.707s.764.293 1.707.293h8"></svg:path><svg:path stroke="currentColor" d="M7 16.5H5c-.236 0-.354 0-.427.073S4.5 16.764 4.5 17v1c0 .236 0 .354.073.427s.191.073.427.073h2"></svg:path><svg:path fill="currentColor" d="M4.5 6a.5.5 0 0 0 0 1zm0 1H7V6H4.5zm0 2a.5.5 0 0 0 0 1zm0 1H7V9H4.5z"></svg:path><svg:path stroke="currentColor" d="M2.5 14.5H7"></svg:path></svg:g>`,
})
export class LetsIconsFoldersLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
