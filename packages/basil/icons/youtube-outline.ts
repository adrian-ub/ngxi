import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilYoutubeOutlineIcon],svg[basil-youtube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.386 8.357A.75.75 0 0 0 9.25 9v6a.75.75 0 0 0 1.136.643l5-3a.75.75 0 0 0 0-1.286zM13.542 12l-2.792 1.675v-3.35z"></svg:path><svg:path d="M17.03 4.641a64.5 64.5 0 0 0-10.06 0l-2.241.176a2.975 2.975 0 0 0-2.703 2.475a28.6 28.6 0 0 0 0 9.416a2.975 2.975 0 0 0 2.703 2.475l2.24.176c3.349.262 6.713.262 10.062 0l2.24-.176a2.975 2.975 0 0 0 2.703-2.475c.52-3.117.52-6.299 0-9.416a2.975 2.975 0 0 0-2.703-2.475zM7.087 6.137a63 63 0 0 1 9.828 0l2.24.175c.676.053 1.229.56 1.34 1.228a27 27 0 0 1 0 8.92a1.475 1.475 0 0 1-1.34 1.228l-2.24.175a63 63 0 0 1-9.828 0l-2.24-.175a1.475 1.475 0 0 1-1.34-1.228a27 27 0 0 1 0-8.92a1.475 1.475 0 0 1 1.34-1.228z"></svg:path></svg:g>`,
})
export class BasilYoutubeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
