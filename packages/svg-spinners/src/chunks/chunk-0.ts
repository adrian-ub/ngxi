import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinners12DotsScaleRotateIcon],svg[svg-spinners-12-dots-scale-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:circle cx="12" cy="3" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate0" attributeName="r" begin="0;svgSpinners12DotsScaleRotate2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="4.21" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate1" attributeName="r" begin="svgSpinners12DotsScaleRotate0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="7.5" cy="4.21" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate2" attributeName="r" begin="svgSpinners12DotsScaleRotate4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="19.79" cy="7.5" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate3" attributeName="r" begin="svgSpinners12DotsScaleRotate1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="4.21" cy="7.5" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate4" attributeName="r" begin="svgSpinners12DotsScaleRotate6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="21" cy="12" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate5" attributeName="r" begin="svgSpinners12DotsScaleRotate3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="3" cy="12" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate6" attributeName="r" begin="svgSpinners12DotsScaleRotate8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="19.79" cy="16.5" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate7" attributeName="r" begin="svgSpinners12DotsScaleRotate5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="4.21" cy="16.5" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate8" attributeName="r" begin="svgSpinners12DotsScaleRotatea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="19.79" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotate9" attributeName="r" begin="svgSpinners12DotsScaleRotate7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="7.5" cy="19.79" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotatea" attributeName="r" begin="svgSpinners12DotsScaleRotateb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:circle cx="12" cy="21" r="1" fill="currentColor"><svg:animate id="svgSpinners12DotsScaleRotateb" attributeName="r" begin="svgSpinners12DotsScaleRotate9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></svg:animate></svg:circle><svg:animatetransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners12DotsScaleRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsBounceIcon],svg[svg-spinners-3-dots-bounce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"><svg:animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsBounceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsMoveIcon],svg[svg-spinners-3-dots-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"></svg:animate><svg:animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"></svg:animate><svg:animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"></svg:animate><svg:animate id="svgSpinners3DotsMove0" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"></svg:animate><svg:animate id="svgSpinners3DotsMove1" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s" values="20;4"></svg:animate></svg:circle><svg:circle cx="4" cy="12" r="3" fill="currentColor"><svg:animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"></svg:animate><svg:animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"></svg:animate><svg:animate id="svgSpinners3DotsMove2" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"></svg:animate><svg:animate id="svgSpinners3DotsMove3" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s" values="20;4"></svg:animate><svg:animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"><svg:animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"></svg:animate><svg:animate id="svgSpinners3DotsMove4" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"></svg:animate><svg:animate id="svgSpinners3DotsMove5" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s" values="20;4"></svg:animate><svg:animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"></svg:animate><svg:animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsMove6" fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"></svg:animate><svg:animate id="svgSpinners3DotsMove7" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s" values="20;4"></svg:animate><svg:animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"></svg:animate><svg:animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"></svg:animate><svg:animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners270RingWithBgIcon],svg[svg-spinners-270-ring-with-bg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinners270RingWithBgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsScaleIcon],svg[svg-spinners-3-dots-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"><svg:animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsScaleMiddleIcon],svg[svg-spinners-3-dots-scale-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="1.5" fill="currentColor"><svg:animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"><svg:animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="1.5" fill="currentColor"><svg:animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsScaleMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners6DotsScaleIcon],svg[svg-spinners-6-dots-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="3" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale0" fill="freeze" attributeName="r" begin="0;svgSpinners6DotsScale2.end-0.5s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="16.5" cy="4.21" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale1" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="7.5" cy="4.21" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale2" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="19.79" cy="7.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale3" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="4.21" cy="7.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale4" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="21" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale5" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="3" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale6" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="19.79" cy="16.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale7" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="4.21" cy="16.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale8" fill="freeze" attributeName="r" begin="svgSpinners6DotsScalea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="16.5" cy="19.79" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScale9" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="7.5" cy="19.79" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScalea" fill="freeze" attributeName="r" begin="svgSpinners6DotsScaleb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="12" cy="21" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleb" fill="freeze" attributeName="r" begin="svgSpinners6DotsScale9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"></svg:animate></svg:circle>`,
})
export class SvgSpinners6DotsScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners6DotsRotateIcon],svg[svg-spinners-6-dots-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:circle cx="12" cy="2.5" r="1.5" fill="currentColor" opacity=".14"></svg:circle><svg:circle cx="16.75" cy="3.77" r="1.5" fill="currentColor" opacity=".29"></svg:circle><svg:circle cx="20.23" cy="7.25" r="1.5" fill="currentColor" opacity=".43"></svg:circle><svg:circle cx="21.5" cy="12" r="1.5" fill="currentColor" opacity=".57"></svg:circle><svg:circle cx="20.23" cy="16.75" r="1.5" fill="currentColor" opacity=".71"></svg:circle><svg:circle cx="16.75" cy="20.23" r="1.5" fill="currentColor" opacity=".86"></svg:circle><svg:circle cx="12" cy="21.5" r="1.5" fill="currentColor"></svg:circle><svg:animatetransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners6DotsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsFadeIcon],svg[svg-spinners-3-dots-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;.2"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4"><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;.2"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3"><svg:animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;.2"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners8DotsRotateIcon],svg[svg-spinners-8-dots-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:circle cx="3" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="3" r="2" fill="currentColor"></svg:circle><svg:circle cx="5.64" cy="5.64" r="2" fill="currentColor"></svg:circle><svg:circle cx="18.36" cy="18.36" r="2" fill="currentColor"></svg:circle><svg:circle cx="5.64" cy="18.36" r="2" fill="currentColor"></svg:circle><svg:circle cx="18.36" cy="5.64" r="2" fill="currentColor"></svg:circle><svg:animatetransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners8DotsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners6DotsScaleMiddleIcon],svg[svg-spinners-6-dots-scale-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="3" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle0" attributeName="r" begin="0;svgSpinners6DotsScaleMiddle2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="16.5" cy="4.21" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle1" attributeName="r" begin="svgSpinners6DotsScaleMiddle0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="7.5" cy="4.21" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle2" attributeName="r" begin="svgSpinners6DotsScaleMiddle4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="19.79" cy="7.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle3" attributeName="r" begin="svgSpinners6DotsScaleMiddle1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="4.21" cy="7.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle4" attributeName="r" begin="svgSpinners6DotsScaleMiddle6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="21" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle5" attributeName="r" begin="svgSpinners6DotsScaleMiddle3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="3" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle6" attributeName="r" begin="svgSpinners6DotsScaleMiddle8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="19.79" cy="16.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle7" attributeName="r" begin="svgSpinners6DotsScaleMiddle5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="4.21" cy="16.5" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle8" attributeName="r" begin="svgSpinners6DotsScaleMiddlea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="16.5" cy="19.79" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddle9" attributeName="r" begin="svgSpinners6DotsScaleMiddle7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="7.5" cy="19.79" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddlea" attributeName="r" begin="svgSpinners6DotsScaleMiddleb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle><svg:circle cx="12" cy="21" r="0" fill="currentColor"><svg:animate id="svgSpinners6DotsScaleMiddleb" attributeName="r" begin="svgSpinners6DotsScaleMiddle9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"></svg:animate></svg:circle>`,
})
export class SvgSpinners6DotsScaleMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsRotateIcon],svg[svg-spinners-3-dots-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:g><svg:circle cx="4" cy="12" r="3" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"></svg:circle><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1" repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners3DotsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners90RingWithBgIcon],svg[svg-spinners-90-ring-with-bg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinners90RingWithBgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners180RingIcon],svg[svg-spinners-180-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinners180RingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners90RingIcon],svg[svg-spinners-90-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinners90RingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBarsScaleIcon],svg[svg-spinners-bars-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="2.8" height="12" x="1" y="6" fill="currentColor"><svg:animate id="svgSpinnersBarsScale0" attributeName="y" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="5.8" y="6" fill="currentColor"><svg:animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="10.6" y="6" fill="currentColor"><svg:animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="15.4" y="6" fill="currentColor"><svg:animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="20.2" y="6" fill="currentColor"><svg:animate id="svgSpinnersBarsScale1" attributeName="y" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBarsScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBarsScaleFadeIcon],svg[svg-spinners-bars-scale-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="14" x="1" y="4" fill="currentColor"><svg:animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;.2"></svg:animate></svg:rect><svg:rect width="6" height="14" x="9" y="4" fill="currentColor" opacity=".4"><svg:animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;.2"></svg:animate></svg:rect><svg:rect width="6" height="14" x="17" y="4" fill="currentColor" opacity=".3"><svg:animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;.2"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBarsScaleFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBarsScaleMiddleIcon],svg[svg-spinners-bars-scale-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="2.8" height="12" x="1" y="6" fill="currentColor"><svg:animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="5.8" y="6" fill="currentColor"><svg:animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="10.6" y="6" fill="currentColor"><svg:animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="15.4" y="6" fill="currentColor"><svg:animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></svg:animate></svg:rect><svg:rect width="2.8" height="12" x="20.2" y="6" fill="currentColor"><svg:animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBarsScaleMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBlocksScaleIcon],svg[svg-spinners-blocks-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9" height="9" x="1.5" y="1.5" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"></svg:animate><svg:animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"></svg:animate><svg:animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate><svg:animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate></svg:rect><svg:rect width="9" height="9" x="13.5" y="1.5" fill="currentColor" rx="1"><svg:animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate></svg:rect><svg:rect width="9" height="9" x="13.5" y="13.5" fill="currentColor" rx="1"><svg:animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate></svg:rect><svg:rect width="9" height="9" x="1.5" y="13.5" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBlocksScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBlocksShuffle2Icon],svg[svg-spinners-blocks-shuffle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"></svg:animate></svg:rect><svg:rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBlocksShuffle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBlocksShuffle3Icon],svg[svg-spinners-blocks-shuffle-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"></svg:animate></svg:rect><svg:rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"></svg:animate></svg:rect><svg:rect width="10" height="10" x="13" y="13" fill="currentColor" rx="1"><svg:animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"></svg:animate><svg:animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBlocksShuffle3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBlocksWaveIcon],svg[svg-spinners-blocks-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="7.33" height="7.33" x="1" y="1" fill="currentColor"><svg:animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"></svg:animate><svg:animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"></svg:animate><svg:animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor"><svg:animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect><svg:rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor"><svg:animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"></svg:animate><svg:animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"></svg:animate><svg:animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate><svg:animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBlocksWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBouncingBallIcon],svg[svg-spinners-bouncing-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="5" fill="currentColor" rx="4" ry="4"><svg:animate id="svgSpinnersBouncingBall0" fill="freeze" attributeName="cy" begin="0;svgSpinnersBouncingBall2.end" calcMode="spline" dur="0.375s" keySplines=".33,0,.66,.33" values="5;20"></svg:animate><svg:animate attributeName="rx" begin="svgSpinnersBouncingBall0.end" calcMode="spline" dur="0.05s" keySplines=".33,0,.66,.33;.33,.66,.66,1" values="4;4.8;4"></svg:animate><svg:animate attributeName="ry" begin="svgSpinnersBouncingBall0.end" calcMode="spline" dur="0.05s" keySplines=".33,0,.66,.33;.33,.66,.66,1" values="4;3;4"></svg:animate><svg:animate id="svgSpinnersBouncingBall1" attributeName="cy" begin="svgSpinnersBouncingBall0.end" calcMode="spline" dur="0.025s" keySplines=".33,0,.66,.33" values="20;20.5"></svg:animate><svg:animate id="svgSpinnersBouncingBall2" attributeName="cy" begin="svgSpinnersBouncingBall1.end" calcMode="spline" dur="0.4s" keySplines=".33,.66,.66,1" values="20.5;5"></svg:animate></svg:ellipse>`,
})
export class SvgSpinnersBouncingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersClockIcon],svg[svg-spinners-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"></svg:path><svg:rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:rect><svg:rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:rect>`,
})
export class SvgSpinnersClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersDotRevolveIcon],svg[svg-spinners-dot-revolve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></svg:path><svg:circle cx="12" cy="2.5" r="1.5" fill="currentColor"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:circle>`,
})
export class SvgSpinnersDotRevolveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersEclipseIcon],svg[svg-spinners-eclipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"><svg:animatetransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinnersEclipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersEclipseHalfIcon],svg[svg-spinners-eclipse-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2,12A10.94,10.94,0,0,1,5,4.65c-.21-.19-.42-.36-.62-.55h0A11,11,0,0,0,12,23c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"><svg:animatetransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinnersEclipseHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersGooeyBalls1Icon],svg[svg-spinners-gooey-balls-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="svgSpinnersGooeyBalls10"><svg:fegaussianblur in="SourceGraphic" result="y" stdDeviation="1.5"></svg:fegaussianblur><svg:fecolormatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"></svg:fecolormatrix><svg:feblend in="SourceGraphic" in2="z"></svg:feblend></svg:filter></svg:defs><svg:g fill="currentColor" filter="url(#svgSpinnersGooeyBalls10)"><svg:circle cx="4" cy="12" r="3"><svg:animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="4;9;4"></svg:animate><svg:animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="3;8;3"></svg:animate></svg:circle><svg:circle cx="15" cy="12" r="8"><svg:animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="15;20;15"></svg:animate><svg:animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="8;3;8"></svg:animate></svg:circle></svg:g>`,
})
export class SvgSpinnersGooeyBalls1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersGooeyBalls2Icon],svg[svg-spinners-gooey-balls-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="svgSpinnersGooeyBalls20"><svg:fegaussianblur in="SourceGraphic" result="y" stdDeviation="1"></svg:fegaussianblur><svg:fecolormatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"></svg:fecolormatrix><svg:feblend in="SourceGraphic" in2="z"></svg:feblend></svg:filter></svg:defs><svg:g filter="url(#svgSpinnersGooeyBalls20)"><svg:circle cx="5" cy="12" r="4" fill="currentColor"><svg:animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5"></svg:animate></svg:circle><svg:circle cx="19" cy="12" r="4" fill="currentColor"><svg:animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19"></svg:animate></svg:circle><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinnersGooeyBalls2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseIcon],svg[svg-spinners-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="0;11"></svg:animate><svg:animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0"></svg:animate></svg:circle>`,
})
export class SvgSpinnersPulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulse2Icon],svg[svg-spinners-pulse-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulse20" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulse21" fill="freeze" attributeName="r" begin="svgSpinnersPulse20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle>`,
})
export class SvgSpinnersPulse2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulse3Icon],svg[svg-spinners-pulse-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulse30" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulse31" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulse32" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle>`,
})
export class SvgSpinnersPulse3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseMultipleIcon],svg[svg-spinners-pulse-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulseMultiple0" fill="freeze" attributeName="r" begin="0;svgSpinnersPulseMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulseMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulseMultiple1" fill="freeze" attributeName="r" begin="svgSpinnersPulseMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulseMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate id="svgSpinnersPulseMultiple2" fill="freeze" attributeName="r" begin="svgSpinnersPulseMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulseMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:circle>`,
})
export class SvgSpinnersPulseMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseRingIcon],svg[svg-spinners-pulse-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersPulseRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseRings2Icon],svg[svg-spinners-pulse-rings-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRings20" attributeName="transform" begin="0;svgSpinnersPulseRings21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRings21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="0;svgSpinnersPulseRings21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRings21" attributeName="transform" begin="svgSpinnersPulseRings20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRings20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="svgSpinnersPulseRings20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersPulseRings2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseRings3Icon],svg[svg-spinners-pulse-rings-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRings30" attributeName="transform" begin="0;svgSpinnersPulseRings32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRings32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="0;svgSpinnersPulseRings32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRings31" attributeName="transform" begin="svgSpinnersPulseRings30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRings30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="svgSpinnersPulseRings30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRings32" attributeName="transform" begin="svgSpinnersPulseRings30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRings30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="svgSpinnersPulseRings30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersPulseRings3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseRingsMultipleIcon],svg[svg-spinners-pulse-rings-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRingsMultiple0" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRingsMultiple1" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform id="svgSpinnersPulseRingsMultiple2" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersPulseRingsMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersRingResizeIcon],svg[svg-spinners-ring-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor"><svg:circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><svg:animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"></svg:animate><svg:animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"></svg:animate></svg:circle><svg:animatetransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinnersRingResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersTadpoleIcon],svg[svg-spinners-tadpole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinnersTadpoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersWifiIcon],svg[svg-spinners-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0"><svg:animate id="svgSpinnersWifi0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersWifi1.end+0.2s" calcMode="discrete" dur="0.25s" values="0;1"></svg:animate><svg:animate id="svgSpinnersWifi1" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" opacity="0"><svg:animate id="svgSpinnersWifi2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi0.end" calcMode="discrete" dur="0.25s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3" opacity="0"><svg:animate id="svgSpinnersWifi3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi2.end" calcMode="discrete" dur="0.25s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersWifiFadeIcon],svg[svg-spinners-wifi-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0"><svg:animate id="svgSpinnersWifiFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersWifiFade1.end+0.2s" dur="0.25s" values="0;1"></svg:animate><svg:animate id="svgSpinnersWifiFade1" fill="freeze" attributeName="opacity" begin="svgSpinnersWifiFade3.end+0.5s" dur="0.1s" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" opacity="0"><svg:animate id="svgSpinnersWifiFade2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifiFade0.end" dur="0.25s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifiFade3.end+0.5s" dur="0.1s" values="1;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3" opacity="0"><svg:animate id="svgSpinnersWifiFade3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifiFade2.end" dur="0.25s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifiFade3.end+0.5s" dur="0.1s" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersWifiFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersWindToyIcon],svg[svg-spinners-wind-toy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"><svg:animatetransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinnersWindToyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners180RingWithBgIcon],svg[svg-spinners-180-ring-with-bg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinners180RingWithBgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBarsRotateFadeIcon],svg[svg-spinners-bars-rotate-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".14"></svg:rect><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".29" transform="rotate(30 12 12)"></svg:rect><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".43" transform="rotate(60 12 12)"></svg:rect><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".57" transform="rotate(90 12 12)"></svg:rect><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".71" transform="rotate(120 12 12)"></svg:rect><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".86" transform="rotate(150 12 12)"></svg:rect><svg:rect width="2" height="5" x="11" y="1" fill="currentColor" transform="rotate(180 12 12)"></svg:rect><svg:animatetransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinnersBarsRotateFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinners270RingIcon],svg[svg-spinners-270-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class SvgSpinners270RingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersBarsFadeIcon],svg[svg-spinners-bars-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="14" x="1" y="4" fill="currentColor"><svg:animate id="svgSpinnersBarsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsFade1.end-0.25s" dur="0.75s" values="1;.2"></svg:animate></svg:rect><svg:rect width="6" height="14" x="9" y="4" fill="currentColor" opacity=".4"><svg:animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.15s" dur="0.75s" values="1;.2"></svg:animate></svg:rect><svg:rect width="6" height="14" x="17" y="4" fill="currentColor" opacity=".3"><svg:animate id="svgSpinnersBarsFade1" fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.3s" dur="0.75s" values="1;.2"></svg:animate></svg:rect>`,
})
export class SvgSpinnersBarsFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
