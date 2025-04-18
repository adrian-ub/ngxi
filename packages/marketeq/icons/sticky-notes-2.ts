import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStickyNotes2Icon],svg[marketeq-sticky-notes-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M29.167 10.417h10.416a2.083 2.083 0 0 1 2.084 2.083v18.75l-12.5 12.5h-18.75a2.083 2.083 0 0 1-2.084-2.083V12.5a2.083 2.083 0 0 1 2.084-2.083h10.416"></svg:path><svg:path stroke="#306CFE" d="M29.167 31.25v12.5l12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M29.167 16.667V8.333c0-1.15-.933-2.083-2.084-2.083h-4.166a2.084 2.084 0 0 0-2.084 2.083v8.334c0 1.15.933 2.083 2.084 2.083h4.166c1.15 0 2.084-.933 2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqStickyNotes2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
