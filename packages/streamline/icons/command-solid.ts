import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCommandSolidIcon],svg[streamline-command-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.332 2.107a.908.908 0 1 0-.347 1.746h.907v-.907a.91.91 0 0 0-.56-.839m2.56 1.746v-.907a2.908 2.908 0 1 0-2.908 2.907h.908v2.255h-.907a2.908 2.908 0 1 0 2.907 2.907v-.907h2.255v.907a2.908 2.908 0 1 0 2.908-2.907h-.908V5.853h.908a2.908 2.908 0 1 0-2.908-2.907v.907zm0 2v2.255h2.255V5.853zm4.255-2h.908a.908.908 0 1 0-.908-.907zm0 6.255v.907a.908.908 0 1 0 .908-.907zm-6.255 0h-.907a.908.908 0 1 0 .907.907z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCommandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
