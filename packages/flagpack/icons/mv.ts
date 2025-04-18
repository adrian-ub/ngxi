import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMvIcon],svg[flagpack-mv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C51918" fill-rule="evenodd" d="M0 0h32v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path fill="#C51918" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#579D20" fill-rule="evenodd" d="M6 6h20v12H6z" clip-rule="evenodd"></svg:path><svg:path stroke="#B6EB9A" stroke-opacity=".238" stroke-width="2" d="M7 7h18v10H7z"></svg:path><svg:mask id="flagpackMv0" width="20" height="12" x="6" y="6" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M6 6h20v12H6z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-width="2" d="M7 7h18v10H7z"></svg:path></svg:mask><svg:g mask="url(#flagpackMv0)"><svg:path fill="#F9FAFA" fill-rule="evenodd" d="M16.033 12.463c-.017 3.065 2.396 4.7 2.396 4.7c-2.753.323-4.586-2.174-4.586-4.67c0-2.498 2.498-4.56 4.586-5.492c0 0-2.379 2.396-2.396 5.462" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackMvIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
