import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSocialFlattrIcon],svg[entypo-social-flattr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.598 8.541c0-1.637.434-2.678 1.889-2.912c.508-.1 1.566-.064 2.239-.064v2.5c0 .024.003.064.009.084a.236.236 0 0 0 .228.175q.09 0 .178-.09L16.377 2H7.548C3.874 2 2 4.115 2 8.066v8.287l3.598-3.602zM14.4 7.248v4.209c0 1.637-.434 2.68-1.889 2.912c-.508.1-1.566.065-2.238.065v-2.5l-.009-.084a.24.24 0 0 0-.228-.176c-.062 0-.118.033-.179.092l-6.235 6.232L7.809 18h4.643C16.125 18 18 15.885 18 11.934V3.647z"></svg:path>`,
})
export class EntypoSocialFlattrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
