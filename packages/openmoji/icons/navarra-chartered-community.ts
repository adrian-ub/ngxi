import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNavarraCharteredCommunityIcon],svg[openmoji-navarra-chartered-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:g stroke-linecap="round"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M31.595 34.255h8.784c0 10.31-2.035 10.34-4.416 10.34c-2.431 0-4.368.094-4.368-10.34"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linejoin="round" stroke-width="2" d="M31.595 34.255h8.784c0 10.31-2.035 10.34-4.416 10.34c-2.431 0-4.368.094-4.368-10.34"></svg:path><svg:path fill="none" stroke="#ea5a47" stroke-linejoin="round" stroke-width="3" d="M31.485 29.805c3.306-.871 5.541-.936 8.997-.032"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linejoin="round" d="M30.925 31.225c3.306-.871 6.684-.904 10.14 0"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-width="2" d="m35.965 26.405l.03 3.714m-6.46-2.304l1.396 2.911m11.534-2.911l-1.396 2.911"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linejoin="round" d="M32.28 39.42h7.428"></svg:path></svg:g><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="M31.6 34.25h8.784m-4.394 0l-.024 10.34l-3.486-2.012l3.486 2.012m-.006 0l3.486-2.012z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m31.6 34.25l.882 8.328l3.498-3.158l3.474 3.158l.93-8.328l-4.403 5.17z"></svg:path><svg:circle cx="35.99" cy="39.42" r=".514" fill="#5c9e31" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiNavarraCharteredCommunityIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
