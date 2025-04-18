import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackVeIcon],svg[flagpack-ve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackVe0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackVe0)"><svg:path fill="#FECA00" d="M0 0v8h32V0z"></svg:path><svg:path fill="#E31D1C" d="M0 16v8h32v-8z"></svg:path><svg:path fill="#F7FCFF" d="m12.737 11.86l.982-.558l1.103.557l-.396-1.133l.824-.832h-1.048l-.484-1.072l-.412 1.072h-1.23l.925.817h-1.037L11.48 9.64l-.412 1.072h-1.23l.942.833l-.18.726h-.785l-.483-1.072l-.413 1.072H7.69l.942.833l-.174.703h-.343l-.484-1.072l-.412 1.072h-1.23l.941.833l-.28 1.133l.983-.558l1.102.557l-.396-1.133l.824-.832H9.11l.224-.127l1.103.557l-.396-1.133l.472-.477l-.013.051l.983-.557l1.102.557l-.396-1.133l.819-.827l.01.01zm6.486-.044l-.983-.558l-1.102.558l.396-1.133l-.824-.833h1.048l.484-1.072l.412 1.072h1.23l-.925.818h1.042l.483-1.073l.413 1.073h1.23l-.942.832l.18.727h.785l.483-1.073l.412 1.073h1.23l-.941.832l.174.703h.343l.484-1.072l.412 1.072h1.23l-.942.833l.28 1.133l-.982-.558l-1.102.558l.396-1.133l-.824-.833h.053l-.225-.127l-1.102.557l.396-1.133l-.472-.477l.013.051l-.983-.557l-1.103.557l.396-1.133l-.82-.83l-.014.013z"></svg:path><svg:path fill="#F7FCFF" d="m15.833 10.535l-.983.557l.28-1.133l-.94-.832h1.23l.412-1.073l.483 1.073h1.048l-.823.832l.396 1.133z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackVeIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
