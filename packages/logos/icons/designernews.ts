import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDesignernewsIcon],svg[logos-designernews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:circle id="logosDesignernews0" cx="128" cy="128" r="128"></svg:circle></svg:defs><svg:mask id="logosDesignernews1" fill="#fff"><svg:use href="#logosDesignernews0"></svg:use></svg:mask><svg:use fill="#B3BBC6" href="#logosDesignernews0"></svg:use><svg:path fill="#666C76" d="m38.715 176.727l107.34 79.844l264.006 16.604L207.754 85.924v42.688l-18.874-13.517l-35.122-29.171l-20.908 34.083l-29.395-24.54L51.77 92.19z" mask="url(#logosDesignernews1)"></svg:path><svg:path fill="#FFF" d="M118.837 131.159c0-27.131-16.675-45.528-48.439-45.528H39.032v91.32H71.06c30.837 0 47.777-18.66 47.777-45.792m-22.763.132c0 19.588-10.059 28.058-26.205 28.058h-8.206v-56.115h8.206c15.484 0 26.205 8.867 26.205 28.057m112.892 45.66v-91.32h-21.043v51.087L154.307 85.63h-21.97v91.32h21.043v-54.66l35.999 54.66z"></svg:path>`,
})
export class LogosDesignernewsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
