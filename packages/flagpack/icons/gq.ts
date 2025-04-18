import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGqIcon],svg[flagpack-gq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackGq0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackGq0)"><svg:path fill="#009D00" d="M0 0v8h32V0z"></svg:path><svg:path fill="#fff" d="M0 8v8h32V8z"></svg:path><svg:path fill="#F80000" d="M0 16v8h32v-8z"></svg:path></svg:g><svg:path fill="#0075D5" fill-rule="evenodd" d="M0 0v24l8-11.848z" clip-rule="evenodd"></svg:path><svg:path fill="#FFD500" stroke="#000" stroke-width=".05" d="m14.57 8.883l-.013.003l-.01-.01l-.206-.19l-.026.28l-.001.013l-.011.007l-.246.137l.258.111l.013.006l.002.012l.055.276l.186-.211l.008-.01l.013.002l.28.033l-.144-.242l-.007-.012l.006-.012l.118-.255zm1 0l-.013.003l-.01-.01l-.206-.19l-.026.28l-.001.013l-.011.007l-.246.137l.258.111l.013.006l.002.012l.055.276l.186-.211l.008-.01l.013.002l.28.033l-.144-.242l-.007-.012l.006-.012l.118-.255zm1 0l-.013.003l-.01-.01l-.206-.19l-.026.28l-.001.013l-.012.007l-.245.137l.259.111l.012.006l.002.012l.055.276l.186-.211l.008-.01l.014.002l.279.033l-.144-.242l-.007-.012l.006-.012l.118-.255zm1 0l-.013.003l-.01-.01l-.206-.19l-.026.28l-.001.013l-.012.007l-.245.137l.259.111l.012.006l.002.012l.055.276l.186-.211l.008-.01l.014.002l.279.033l-.144-.242l-.007-.012l.006-.012l.118-.255zm1 0l-.013.003l-.01-.01l-.206-.19l-.026.28l-.001.013l-.012.007l-.245.137l.259.111l.012.006l.002.012l.055.276l.186-.211l.008-.01l.014.002l.279.033l-.144-.242l-.007-.012l.006-.012l.118-.255zm1 0l-.013.003l-.01-.01l-.206-.19l-.026.28l-.001.013l-.012.007l-.245.137l.259.111l.012.006l.002.012l.055.276l.186-.211l.008-.01l.014.002l.279.033l-.144-.242l-.007-.012l.006-.012l.118-.255z"></svg:path><svg:path stroke="#373737" stroke-width=".1" d="M15.05 10.05h3.9V13a1.95 1.95 0 1 1-3.9 0z"></svg:path><svg:path fill="#6F3E1D" fill-rule="evenodd" d="M16.726 11.96s-.201 2.365-.403 2.508c-.201.144.965.215 1.077.108s-.509-2.035-.296-2.616s.557-.629.557-.629s-.433-.091-.557.083c-.123.175-.492-.082-.492-.082z" clip-rule="evenodd"></svg:path><svg:path fill="#009D29" fill-rule="evenodd" d="M16.682 11.826h-.155s-.105.41-.346.205s-.581-.132-.581-.132s.03-.246.4-.344s.527-.891.527-.891s.524-.195.842.204c.319.4.768.23.768.23s.328.186.164.457s-.444.47-.688.271s-.93 0-.93 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackGqIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
