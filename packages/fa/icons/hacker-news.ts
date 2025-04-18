import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faHackerNewsIcon],svg[fa-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m809 876l266-499H963L806 689q-24 48-44 92l-42-92l-155-312H445l263 493v324h101zm727-588v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaHackerNewsIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
