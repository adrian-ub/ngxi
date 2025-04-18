import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPollenIcon],svg[meteocons-pollen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPollen0" viewBox="0 0 304 96"><svg:circle cx="152" cy="16" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-0.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="200" cy="72" r="21.3" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.17s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="104" cy="72" r="21.3" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="16" cy="80" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.67s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="288" cy="80" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.5s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="232" cy="24" r="10.7" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="72" cy="24" r="10.7" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.83s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle></svg:symbol></svg:defs><svg:use width="304" height="96" href="#meteoconsPollen0" transform="translate(104 208)"></svg:use>`,
})
export class MeteoconsPollenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
