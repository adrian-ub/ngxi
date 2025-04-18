import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMusicNoteSingleCircleFilledIcon],svg[pepicons-pop-music-note-single-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopMusicNoteSingleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M12.781 4.698c4.323 2.937 6.469 5.064 6.469 6.606c0 1.492-.82 2.7-2.396 3.583c-.436.245-.922-.232-.685-.672c.407-.758.273-1.607-.461-2.617c-.774-1.065-1.89-1.84-3.365-2.328A.5.5 0 0 1 12 8.795V5.111a.5.5 0 0 1 .781-.413M10.75 20.75c-1.77 0-3.25-1.143-3.25-2.625S8.98 15.5 10.75 15.5S14 16.643 14 18.125s-1.48 2.625-3.25 2.625"></svg:path><svg:path d="M13 7a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopMusicNoteSingleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopMusicNoteSingleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
