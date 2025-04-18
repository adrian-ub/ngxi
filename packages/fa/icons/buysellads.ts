import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBuyselladsIcon],svg[fa-buysellads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M915 958H621l147-551zm86 322h311L988 256H548L224 1280h311l383-314zm535-992v960q0 118-85 203t-203 85H288q-118 0-203-85T0 1248V288Q0 170 85 85T288 0h960q118 0 203 85t85 203"></svg:path>`,
})
export class FaBuyselladsIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
