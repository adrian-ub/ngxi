import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCogFilledIcon],svg[line-md-cog-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogFilled0"><svg:defs><svg:symbol id="lineMdCogFilled1"><svg:path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:use href="#lineMdCogFilled1"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="1"></svg:set></svg:g></svg:g><svg:circle cx="12" cy="12" r="3.5"></svg:circle></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogFilled0)"></svg:rect>`,
})
export class LineMdCogFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
